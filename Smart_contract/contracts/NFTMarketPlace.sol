// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
 * the Metadata extension, but not including the Enumerable extension, which is available separately as
 * {ERC721Enumerable}.
 */
contract DogsNFT is ERC721, ERC721URIStorage, Pausable, Ownable {

    uint public MAX_SUPPLY = 100;
    uint public publicLimit = 50;
    uint public WhiteAdmainMint = 10;
    uint public whiteUserLimit = 40;
    bool public CheckPublicsale = false;
    bool public CheckWhiteListUserSale = true ;
    string public BaseUrl = "https://gateway.pinata.cloud/ipfs/";

     struct NftName{
        string name ;
        // string metadataHash;
    }

     // Mapping whiteListUser address to return bool value 
    mapping (address => bool) public whiteListUser;
    mapping (address => bool) public WhiteListAdmin;
    mapping(uint => NftName ) public NftNames;

    // some basic errors

    constructor() ERC721("Sufyan", "SUFI") { 
    }
        modifier Requirments(){
      
        require(owner() != msg.sender , "Owner cannot Allow to mint the nft" );
        require (MAX_SUPPLY != 0 , "NFt Limit has been Crosed");
        require(balanceOf(msg.sender) != 5 , "your limit is just 5 "); 
        _;
    }

        /**
     * @dev BaseUriUpdate is used to set BaseURI.
     * Requirement:
     * - This function can only called by whitelist admin of contract
     *
     * @param _updateBaseUri - New baseURI
     */
    function BaseUriUpdate(string memory _updateBaseUri)public  {
     require(WhiteListAdmin[msg.sender] == true , "you can't update baseURl Just Whitelist Admin can change ...!");

        BaseUrl = _updateBaseUri;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    
    function acticePublic() public onlyOwner{
        require(CheckPublicsale != true , "Public Sales is Already active");
        CheckPublicsale = true;
        CheckWhiteListUserSale = false;
        publicLimit += whiteUserLimit;
        whiteUserLimit -= whiteUserLimit;
    }
    function unActicePublic() public onlyOwner{
        require(CheckPublicsale != false, "Public Sales Are Alredat UnActive");
        CheckPublicsale = false;
    }
     
 /**
     * @dev addWhiteListUser is used Add WhiteList User account.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param _whiteListUser - WhiteList User to be add 
    */
    function addWhiteListUser (address _whiteListUser)public onlyOwner{//1219
        // whiteListUser[_whiteListUser] = true; //function parameter 21298 gas
        require(whiteListUser[_whiteListUser] != true ,"This address is Already in List");
        whiteListUser[_whiteListUser] = true;              
    }
    /**
     * @dev removeWhiteListUser is used to remove WhiteListUser account.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param _whiteListUser - RemoveUser to be remove 
    */

    function removeWhiteListUser (address _whiteListUser)public onlyOwner{
        require(whiteListUser[_whiteListUser] != false ,"We Have No this address of White USer..");
        whiteListUser[_whiteListUser] = false; //function parameter
    }

    /**
     * @dev addWhiteListadmin is used to Admin & whitelsit account.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param _WhiteListAdmin - AdminAddress to be add 
    */
      function addWhiteListadmin (address _WhiteListAdmin)public onlyOwner{
        require(WhiteListAdmin[_WhiteListAdmin] != true , "This address is Already in list");
        WhiteListAdmin[_WhiteListAdmin] = true; //function parameter
    }
  /**
     * @dev removeWhiteListadmin is used to remove WhiteListAdmin account.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param _WhiteListAdmin - RemoveUser to be remove 
    */
    function removeWhiteListadmin (address _WhiteListAdmin)public onlyOwner{
        require(whiteListUser[_WhiteListAdmin] != false ,"We Have No this address of White USer..");
        WhiteListAdmin[_WhiteListAdmin] = false; //function parameter
    }

/**
     * @dev AdminMint is used to create a new NFT from WhiteList Admin address.
     * Requirement:     
     * @param tokenId - NFT tokenId 
     * @param _metadataHash - NFT Metadata
     * @param _name - NFT name 
    */
      function AdminMint( uint256 tokenId, string memory _metadataHash , string memory _name )public Requirments{
      
        require(tokenId != 0 , "TokenId is not equal to 0 ..");
        require(WhiteAdmainMint != 0 ,"White List User Limit reach Out sorry...");
        WhiteAdmainMint -= 1;
        MAX_SUPPLY -= 1;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _metadataHash);
        NftNames[tokenId] = NftName(_name);
        BaseUrl = string(abi.encodePacked(BaseUrl,_metadataHash));
      }
      /**
     * @dev WhiteListMint is used to create a new NFT from WhitelistUser address.
     * Requirement:     
     * @param tokenId - NFT tokenId 
     * @param _metadataHash - NFT Metadata
     * @param _name - NFT name 
    */
      function WhiteListMint ( uint256 tokenId, string memory _metadataHash , string memory _name )public Requirments{     
        require(tokenId != 0 , "TokenId is not equal to 0 ..");
        require(whiteUserLimit != 0 ,"White List User Limit reach Out sorry...");
        whiteUserLimit -= 1 ;
        MAX_SUPPLY -= 1 ;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _metadataHash);
        NftNames[tokenId] = NftName(_name );
        BaseUrl = string(abi.encodePacked(BaseUrl,_metadataHash));
        
      }
        /**
     * @dev publicMint is used to create a new NFT From Any Account address.
     * Requirement:     
     * @param tokenId - NFT tokenId 
     * @param _metadataHash - NFT Metadata
     * @param _name - NFT name 
    */
      function publicMint( uint256 tokenId, string memory _metadataHash , string memory _name )public {
        require (MAX_SUPPLY != 0 , "NFt Limit has been Crosed");
        require(balanceOf(msg.sender) != 5 , "your limit is just 5 "); 
        require(tokenId != 0 , "TokenId is not equal to 0 ..");
        require(CheckPublicsale == true ,"Public Sales are not active yet ... come back latter");
        require(publicLimit != 0 , "public limit reach out sorry...");
        publicLimit -= 1;
        MAX_SUPPLY -= 1;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _metadataHash);
        NftNames[tokenId] = NftName(_name);
        BaseUrl = string(abi.encodePacked(BaseUrl,_metadataHash));
      }

  /**
     * @dev Hook that is called before any (single) token transfer. This includes minting and burning.
     * See {_beforeConsecutiveTokenTransfer}.
     *
     * Calling conditions:
     *
     * - When `from` and `to` are both non-zero, ``from``'s `tokenId` will be
     * transferred to `to`.
     * - When `from` is zero, `tokenId` will be minted for `to`.
     * - When `to` is zero, ``from``'s `tokenId` will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

/**
     * @dev Destroys `tokenId`.
     * The approval is cleared when the token is burned.
     * This is an internal function that does not check if the sender is authorized to operate on the token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     *
     * Emits a {Transfer} event.
     */

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
 /**
     * @dev See {IERC721Metadata-tokenURI}.
     */

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}